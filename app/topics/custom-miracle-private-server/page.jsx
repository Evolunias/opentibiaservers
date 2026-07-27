import CustomMiraclePrivateServerKeywordPage, { generateMetadata } from './custom-miracle-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiraclePrivateServerKeywordPage />;
}
