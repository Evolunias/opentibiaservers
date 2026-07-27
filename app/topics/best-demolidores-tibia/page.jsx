import BestDemolidoresTibiaKeywordPage, { generateMetadata } from './best-demolidores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDemolidoresTibiaKeywordPage />;
}
