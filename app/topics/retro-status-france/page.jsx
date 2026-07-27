import RetroStatusFranceKeywordPage, { generateMetadata } from './retro-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroStatusFranceKeywordPage />;
}
