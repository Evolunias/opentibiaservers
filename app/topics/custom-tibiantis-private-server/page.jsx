import CustomTibiantisPrivateServerKeywordPage, { generateMetadata } from './custom-tibiantis-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisPrivateServerKeywordPage />;
}
