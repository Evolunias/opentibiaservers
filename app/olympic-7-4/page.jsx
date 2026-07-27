import Olympic74Page, { generateMetadata } from './olympic-7-4';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Olympic74Page />;
}
