import CustomClassickDrakoriaPrivateServerKeywordPage, { generateMetadata } from './custom-classick-drakoria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassickDrakoriaPrivateServerKeywordPage />;
}
