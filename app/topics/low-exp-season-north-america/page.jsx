import LowExpSeasonNorthAmericaKeywordPage, { generateMetadata } from './low-exp-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSeasonNorthAmericaKeywordPage />;
}
