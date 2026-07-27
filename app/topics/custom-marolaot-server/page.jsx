import CustomMarolaotServerKeywordPage, { generateMetadata } from './custom-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMarolaotServerKeywordPage />;
}
