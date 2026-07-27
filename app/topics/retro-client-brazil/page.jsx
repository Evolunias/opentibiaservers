import RetroClientBrazilKeywordPage, { generateMetadata } from './retro-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroClientBrazilKeywordPage />;
}
