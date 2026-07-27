import BestNostaltherTibiaKeywordPage, { generateMetadata } from './best-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNostaltherTibiaKeywordPage />;
}
