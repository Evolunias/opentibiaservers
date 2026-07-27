import LowExpSeasonFranceKeywordPage, { generateMetadata } from './low-exp-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSeasonFranceKeywordPage />;
}
