import CustomUnlinePrivateServerKeywordPage, { generateMetadata } from './custom-unline-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlinePrivateServerKeywordPage />;
}
