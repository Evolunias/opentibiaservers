import CurrentClassickDrakoriaTibiaKeywordPage, { generateMetadata } from './current-classick-drakoria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassickDrakoriaTibiaKeywordPage />;
}
