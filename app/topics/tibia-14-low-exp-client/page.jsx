import Tibia14LowExpClientKeywordPage, { generateMetadata } from './tibia-14-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14LowExpClientKeywordPage />;
}
