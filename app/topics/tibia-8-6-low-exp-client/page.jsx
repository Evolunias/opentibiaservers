import Tibia86LowExpClientKeywordPage, { generateMetadata } from './tibia-8-6-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86LowExpClientKeywordPage />;
}
