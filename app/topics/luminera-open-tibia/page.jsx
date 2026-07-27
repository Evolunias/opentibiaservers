import LumineraOpenTibiaKeywordPage, { generateMetadata } from './luminera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraOpenTibiaKeywordPage />;
}
