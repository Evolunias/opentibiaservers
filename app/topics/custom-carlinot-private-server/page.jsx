import CustomCarlinotPrivateServerKeywordPage, { generateMetadata } from './custom-carlinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotPrivateServerKeywordPage />;
}
