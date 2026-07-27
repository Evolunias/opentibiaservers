import CustomEvoleraPrivateServerKeywordPage, { generateMetadata } from './custom-evolera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraPrivateServerKeywordPage />;
}
