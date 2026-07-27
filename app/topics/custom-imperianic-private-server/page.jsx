import CustomImperianicPrivateServerKeywordPage, { generateMetadata } from './custom-imperianic-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicPrivateServerKeywordPage />;
}
