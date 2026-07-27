import Tibia76LowExpClientKeywordPage, { generateMetadata } from './tibia-7-6-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76LowExpClientKeywordPage />;
}
