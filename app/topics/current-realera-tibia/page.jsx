import CurrentRealeraTibiaKeywordPage, { generateMetadata } from './current-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealeraTibiaKeywordPage />;
}
