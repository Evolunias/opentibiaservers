import BestUnlineTibiaKeywordPage, { generateMetadata } from './best-unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestUnlineTibiaKeywordPage />;
}
