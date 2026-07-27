import EvoStatusFranceKeywordPage, { generateMetadata } from './evo-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoStatusFranceKeywordPage />;
}
