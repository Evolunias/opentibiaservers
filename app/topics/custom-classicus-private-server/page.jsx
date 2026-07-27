import CustomClassicusPrivateServerKeywordPage, { generateMetadata } from './custom-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusPrivateServerKeywordPage />;
}
