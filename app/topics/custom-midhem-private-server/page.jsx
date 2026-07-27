import CustomMidhemPrivateServerKeywordPage, { generateMetadata } from './custom-midhem-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemPrivateServerKeywordPage />;
}
