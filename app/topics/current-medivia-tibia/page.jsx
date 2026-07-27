import CurrentMediviaTibiaKeywordPage, { generateMetadata } from './current-medivia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaTibiaKeywordPage />;
}
