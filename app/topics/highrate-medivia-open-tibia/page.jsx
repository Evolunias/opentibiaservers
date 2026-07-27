import HighrateMediviaOpenTibiaKeywordPage, { generateMetadata } from './highrate-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaOpenTibiaKeywordPage />;
}
