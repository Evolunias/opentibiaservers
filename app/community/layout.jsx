import { buildAbsoluteUrl } from '@/lib/seo';

export const metadata = {
  title: 'Open Tibia Community Boards',
  description: 'Discuss Open Tibia server launches, player reviews, support questions, and server community updates.',
  alternates: {
    canonical: buildAbsoluteUrl('/community'),
  },
};

export default function CommunityLayout({ children }) {
  return children;
}
