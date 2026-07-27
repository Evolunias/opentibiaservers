import VenoreotResetKeywordPage, { generateMetadata } from './venoreot-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotResetKeywordPage />;
}
