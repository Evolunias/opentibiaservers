import Tibia81LowExpClientKeywordPage, { generateMetadata } from './tibia-8-1-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81LowExpClientKeywordPage />;
}
