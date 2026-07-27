import BestSerenityOpenTibiaKeywordPage, { generateMetadata } from './best-serenity-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityOpenTibiaKeywordPage />;
}
