import LowrateMediviaOpenTibiaKeywordPage, { generateMetadata } from './lowrate-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMediviaOpenTibiaKeywordPage />;
}
