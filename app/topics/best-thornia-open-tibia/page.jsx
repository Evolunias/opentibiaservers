import BestThorniaOpenTibiaKeywordPage, { generateMetadata } from './best-thornia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaOpenTibiaKeywordPage />;
}
