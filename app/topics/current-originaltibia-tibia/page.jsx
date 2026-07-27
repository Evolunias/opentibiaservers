import CurrentOriginaltibiaTibiaKeywordPage, { generateMetadata } from './current-originaltibia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOriginaltibiaTibiaKeywordPage />;
}
