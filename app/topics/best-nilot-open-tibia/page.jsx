import BestNilotOpenTibiaKeywordPage, { generateMetadata } from './best-nilot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotOpenTibiaKeywordPage />;
}
