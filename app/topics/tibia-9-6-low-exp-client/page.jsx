import Tibia96LowExpClientKeywordPage, { generateMetadata } from './tibia-9-6-low-exp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96LowExpClientKeywordPage />;
}
