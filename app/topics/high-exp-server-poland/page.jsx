import HighExpServerPolandKeywordPage, { generateMetadata } from './high-exp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerPolandKeywordPage />;
}
