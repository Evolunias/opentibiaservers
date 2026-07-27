import BestSerenityTibiaKeywordPage, { generateMetadata } from './best-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityTibiaKeywordPage />;
}
