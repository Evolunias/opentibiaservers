import LowrateLumineraOpenTibiaKeywordPage, { generateMetadata } from './lowrate-luminera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraOpenTibiaKeywordPage />;
}
