import LowrateTibiaraTibiaKeywordPage, { generateMetadata } from './lowrate-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraTibiaKeywordPage />;
}
