import BestClassickDrakoriaTibiaKeywordPage, { generateMetadata } from './best-classick-drakoria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassickDrakoriaTibiaKeywordPage />;
}
