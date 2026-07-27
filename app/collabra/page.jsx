import CollabraPage, { generateMetadata } from './collabra';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CollabraPage />;
}
