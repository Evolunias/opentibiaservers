import Tibia80HighExpServersKeywordPage, { generateMetadata } from './tibia-8-0-high-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80HighExpServersKeywordPage />;
}
