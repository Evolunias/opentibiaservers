import LowrateTibiaraOpenTibiaKeywordPage, { generateMetadata } from './lowrate-tibiara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraOpenTibiaKeywordPage />;
}
