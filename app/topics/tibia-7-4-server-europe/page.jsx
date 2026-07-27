import Tibia74ServerEuropeKeywordPage, { generateMetadata } from './tibia-7-4-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerEuropeKeywordPage />;
}
