import CustomMarolaotPrivateServerKeywordPage, { generateMetadata } from './custom-marolaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMarolaotPrivateServerKeywordPage />;
}
