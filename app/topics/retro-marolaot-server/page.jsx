import RetroMarolaotServerKeywordPage, { generateMetadata } from './retro-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroMarolaotServerKeywordPage />;
}
