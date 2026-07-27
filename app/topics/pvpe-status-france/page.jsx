import PvpeStatusFranceKeywordPage, { generateMetadata } from './pvpe-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeStatusFranceKeywordPage />;
}
