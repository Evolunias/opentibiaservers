import GesiorAacPage, { generateMetadata } from './gesior-aac';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GesiorAacPage />;
}
