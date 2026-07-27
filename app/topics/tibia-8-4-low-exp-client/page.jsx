import Tibia84LowExpClientKeywordPage, { generateMetadata } from './tibia-8-4-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84LowExpClientKeywordPage />;
}
