import RetroStatusBrazilKeywordPage, { generateMetadata } from './retro-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroStatusBrazilKeywordPage />;
}
