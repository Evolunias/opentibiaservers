import CustomKasteriaPrivateServerKeywordPage, { generateMetadata } from './custom-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaPrivateServerKeywordPage />;
}
