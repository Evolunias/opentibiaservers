import RetroOtServerBrazilKeywordPage, { generateMetadata } from './retro-ot-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOtServerBrazilKeywordPage />;
}
