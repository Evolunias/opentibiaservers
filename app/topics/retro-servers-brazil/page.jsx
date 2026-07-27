import RetroServersBrazilKeywordPage, { generateMetadata } from './retro-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServersBrazilKeywordPage />;
}
